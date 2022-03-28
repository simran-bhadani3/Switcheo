// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

interface IERC20 {
    function balanceOf(address _owner) external view returns (uint256 balance);
}

contract Balance {

    struct AccountBalance {
        address token;
        uint256 balance;
    }

    function getBalances(address _address, address[] memory _tokens) 
        external view returns (AccountBalance[] memory) {
            AccountBalance[] memory balances = new AccountBalance[](_tokens.length);
            for(uint256 i = 0; i < _tokens.length; i++) {
                uint256 balance = IERC20(_tokens[i]).balanceOf(_address);
                balances[i] = AccountBalance(_tokens[i], balance);
            }
            return balances;
    } 

}