import { ethers } from "ethers";
export const abi = [
                    "function buyPolice(string productName, uint price) public payable ",
                    "function getPoliciesCount() public view returns(uint count)",
                    "function getTermsCount() public view returns(uint count)",
                    "function fund() public view returns (uint prize)",
                    "function terms(uint term) public view returns (uint terms) "
                ];
export const provider = ethers.getDefaultProvider("ropsten");
export const contractAddress = "0x156d98fddc1e8d0e541f6c4740dd65c9d8b90363";