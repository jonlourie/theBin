import { useState } from "react";
import { useContract, useProvider, useSigner } from "wagmi";
import { Card, Illustration } from "@web3uikit/core";
import style from "@/styles/Home.module.css";

//import the contract which you still have to build this is the "contracts folder" in the root directory in index.js
//import { abi, NFTMarketplace_CONTRACT_ADDRESS } from "../contracts/index.js";


export default function CardComp(props) { 
    const provider = useProvider();
    const { data: signer } = useSigner();
    const [nftPrice, setNftPrice] = useState(0);

    const [nft , setNft] = useState(JSON.parse(props.uri.metadata));
    const [nftImage, setNftImage] = useState(() => {
        if(nft?.image) {
            return nft.image.include("ipfs") 
            ? `https://ipfs.io/ipfs/${nft.image.split("ipfs://")[1]}` 
            : nft.split("\\")[0];
        }
    });

    //const NftMarketplace = useContract({
        //address: NFTMarketplace_CONTRACT_ADDRESS,
        //abi: abi,
        //signerOrProvider: signer || provider,
    //});

    const handleChange = (e) => {
        setNftPrice(Number(e.target.value));
    };

    const handleSubmit = async () => {
        //try {
            //const tx = await NftMarketplace.createMarketItem(
                //NFTMarketplace_CONTRACT_ADDRESS,
                //props.uri.token_uri,
                //nftPrice,
            //);
            //await tx.wait();
            //console.log("Success");
            //alert("Success");
        //} catch (error) {
            //console.log(error);
        //}
    };

    return (
        <section className={style.cardContainer}>
          <Card
            onClick={function noRefCheck() {}}
            setIsSelected={function noRefCheck() {}}
            title={nft.name}
          >
            <section>
              {nftImage ? <img src={nftImage} /> : <Illustration logo="lazyNft" />}
            </section>
          </Card>
          <section className={style.sellSection}>
            <input
              placeholder="amount"
              disabled=""
              type="number"
              className={style.inputField_amount}
              onChange={handleChange}
            />
            <button className={style.sell_btn} onClick={handleSubmit}>
              LIST FOR SALE
            </button>
          </section>
        </section>
    );
}
