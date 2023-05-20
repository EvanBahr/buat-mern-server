exports.createProduct = (req, res, next) => {
  console.log("request :", req.body);
  res.json({
    message: "create product sukses",
    data: {
      id: 1,
      nama: "donat kacang",
      harga: 2000,
    },
  });
  next();
};
exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "get all products sukses",
    data: [
      {
        id: 1,
        jenisDonat: "Donat Cokelat",
        harga: 15000,
        deskripsi:
          "Donat dengan taburan cokelat lezat yang menggoda selera. Cocok untuk pencinta cokelat!",
      },
      {
        id: 2,
        jenisDonat: "Donat Stroberi",
        harga: 12000,
        deskripsi:
          "Donat lembut dengan topping stroberi segar yang memberikan rasa manis dan asam yang seimbang.",
      },
      {
        id: 3,
        jenisDonat: "Donat Keju",
        harga: 18000,
        deskripsi:
          "Donat lezat dengan lapisan keju gurih yang meleleh di dalam mulut. Pasti membuat Anda ketagihan!",
      },
      {
        id: 4,
        jenisDonat: "Donat Matcha",
        harga: 20000,
        deskripsi:
          "Donat dengan rasa matcha yang khas dan aroma yang menenangkan. Cocok untuk penggemar teh hijau.",
      },
      {
        id: 5,
        jenisDonat: "Donat Blueberry",
        harga: 13000,
        deskripsi:
          "Donat dengan rasa manis dan segar dari blueberry asli yang mengandung antioksidan tinggi.",
      },
      {
        id: 6,
        jenisDonat: "Donat Kacang",
        harga: 16000,
        deskripsi:
          "Donat dengan taburan kacang renyah yang memberikan sensasi gurih pada setiap gigitan.",
      },
      {
        id: 7,
        jenisDonat: "Donat Pandan",
        harga: 14000,
        deskripsi:
          "Donat dengan aroma pandan yang lezat dan warna hijau alami. Rasakan kelezatannya sekarang!",
      },
      {
        id: 8,
        jenisDonat: "Donat Red Velvet",
        harga: 17000,
        deskripsi:
          "Donat merah mewah dengan cita rasa red velvet yang lembut dan krim keju yang lezat di atasnya.",
      },
      {
        id: 9,
        jenisDonat: "Donat Double Choco",
        harga: 16000,
        deskripsi:
          "Donat cokelat ganda dengan lapisan cokelat di dalam dan di luar. Maksimal bagi pencinta cokelat!",
      },
      {
        id: 10,
        jenisDonat: "Donat Salted Caramel",
        harga: 19000,
        deskripsi:
          "Donat dengan karamel garam yang sempurna, memberikan kombinasi rasa manis dan gurih yang menggoda.",
      },
    ],
  });
  next();
};
