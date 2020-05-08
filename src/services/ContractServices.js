import { ethers } from "ethers";
const abi = [
                    "function buyPolice(string productName, uint price) public payable ",
                    "function getPoliciesCount() public view returns(uint count)",
                    "function getTermsCount() public view returns(uint count)",
                    "function fund() public view returns (uint prize)",
                    "function terms(uint term) public view returns (uint terms) "
                ];
export const provider = ethers.getDefaultProvider("ropsten");
const contractAddress = "0xe8951c880363435795a90616391f1f7c30d0b2b8";

export const contract = new ethers.Contract(contractAddress, abi, provider);


export const parseUnits = value => ethers.utils.parseUnits(value, "wei")