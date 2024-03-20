module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      username: String,
      email: String,
      password: String,
      isActive: Boolean,
      avatar: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("users", schema);
};
