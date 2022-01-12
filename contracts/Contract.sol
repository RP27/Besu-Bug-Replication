contract Contract {
    function callMe(address) external {
        revert("Revert anyway");
    }
}