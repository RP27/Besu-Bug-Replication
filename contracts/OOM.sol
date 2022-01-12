contract OOM {
    event Reverted(address indexed addr, bytes revertReason);

    function callMe(address addr) external {
        bytes memory ptr;
        uint256 offset;
        uint256 size;
        uint256 result;

        assembly {
            ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize())
            result := delegatecall(gas(), addr, ptr, calldatasize(), 0, 0)
            size := returndatasize()
            returndatacopy(ptr, 0, size)

            switch result
            case 0 {
                if gt(size, 0) {
                    offset := add(ptr, 0x120)
                    mstore(0x40, offset)
                    // ptr := add(ptr, 4)
                    // let lengthFieldLength := mload(ptr)
                    // ptr := add(ptr, lengthFieldLength)
                }
            }
        }

        if (result == 0) {
            emit Reverted(addr, ptr);
        }
    }
}