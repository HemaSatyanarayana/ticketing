import mongoose from "mongoose";

interface userAttr {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attr: userAttr): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attr: userAttr) => {
  return new User(attr);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

const buildUser = (user: userAttr) => {
  return new User(user);
};

export { User };
