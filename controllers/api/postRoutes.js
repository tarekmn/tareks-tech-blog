const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    res.status(200).json(blogData);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  console.log("HELLO");
  try {
    const data = await Blog.update(req.body
      , {
        where: {
          id: req.params.id,
        },
      });
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log("HELLO");
    console.log(err.message);
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    // console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
});

module.exports = router;
