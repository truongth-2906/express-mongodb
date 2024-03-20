module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      }
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.pre('save', (next) => {
    console.log(111111111111);
    next();
  });

  return mongoose.model("tutorials", schema);
};
