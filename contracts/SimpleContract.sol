pragma solidity 0.7.0; 

contract SimpleContract {
    uint256 public myNumber; 
    uint256 public lastChecked; 
    uint256 public lastChanged; 

    constructor(){
        myNumber = 0; 
        lastChanged = block.timestamp; 
        lastChecked = 0; 
    }

    function changeNumber(uint256 _newNumber) external {
        myNumber = _newNumber;
        lastChanged = block.timestamp;
    }

    function checkNumber() external returns (uint256 n){
        n = myNumber; 
        lastChecked = block.timestamp; 
    }

}