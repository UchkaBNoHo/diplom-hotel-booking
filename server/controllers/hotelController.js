const hotelModel = require("../model/hotelModel");

exports.getHotels = async (req, res) => {
  const query = req.query;
  console.log(query);

  try {
    const filter = {};

    if (query.city) filter.city = query.city;
    if (query.type) filter.type = query.type;
    if (query.minPrice || query.maxPrice) {
      filter.pricePerNight = {};
      if (query.minPrice) filter.pricePerNight.$gte = parseInt(query.minPrice);
      if (query.maxPrice) filter.pricePerNight.$lte = parseInt(query.maxPrice);
    }
    if (query.conveniences) {
      // Split the conveniences string into an array if it's a comma-separated string
      const conveniencesArray = Array.isArray(query.conveniences)
        ? query.conveniences
        : query.conveniences.split(",");

      // Add the conveniences filter
      filter.conveniences = { $all: conveniencesArray };
    }

    // Log all hotels (for debugging)
    const allHotels = await hotelModel.find();
    console.log(allHotels);

    console.log(filter);

    // Query hotels with the constructed filter
    const filteredHotels = await hotelModel.find(filter);
    console.log(filteredHotels);

    // Respond with the filtered hotels
    res.status(200).json(filteredHotels);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

// export const getPost = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const post = await prisma.post.findUnique({
//       where: { id },
//       include: {
//         postDetail: true,
//         user: {
//           select: {
//             username: true,
//             avatar: true,
//           },
//         },
//       },
//     });

//     const token = req.cookies?.token;

//     if (token) {
//       jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
//         if (!err) {
//           const saved = await prisma.savedPost.findUnique({
//             where: {
//               userId_postId: {
//                 postId: id,
//                 userId: payload.id,
//               },
//             },
//           });
//           res.status(200).json({ ...post, isSaved: saved ? true : false });
//         }
//       });
//     }
//     res.status(200).json({ ...post, isSaved: false });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to get post" });
//   }
// };

// export const addPost = async (req, res) => {
//   const body = req.body;
//   const tokenUserId = req.userId;

//   try {
//     const newPost = await prisma.post.create({
//       data: {
//         ...body.postData,
//         userId: tokenUserId,
//         postDetail: {
//           create: body.postDetail,
//         },
//       },
//     });
//     res.status(200).json(newPost);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to create post" });
//   }
// };

// export const updatePost = async (req, res) => {
//   try {
//     res.status(200).json();
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to update posts" });
//   }
// };

// export const deletePost = async (req, res) => {
//   const id = req.params.id;
//   const tokenUserId = req.userId;

//   try {
//     const post = await prisma.post.findUnique({
//       where: { id },
//     });

//     if (post.userId !== tokenUserId) {
//       return res.status(403).json({ message: "Not Authorized!" });
//     }

//     await prisma.post.delete({
//       where: { id },
//     });

//     res.status(200).json({ message: "Post deleted" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to delete post" });
//   }
// };
