import auth from "../config/firebase-config.js";
import logger from "../logging.cjs";

export const getAllUsers = async (req, res) => {
  const maxResults = 10;
  let users = [];

  try {
    const userRecords = await auth.listUsers(maxResults);

    userRecords.users.forEach((user) => {
      const { uid, email, displayName, photoURL } = user;
      users.push({ uid, email, displayName, photoURL });
    });

    logger.info("Successfully retrieved users", { usersCount: users.length });
    res.status(200).json(users);
  } catch (error) {
    logger.error("Error retrieving users", { error: error.message });
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

export const getUser = async (req, res) => {
  try {
    const userRecord = await auth.getUser(req.params.userId);

    const { uid, email, displayName, photoURL } = userRecord;

    logger.info("Successfully retrieved user", { userId: req.params.userId });
    res.status(200).json({ uid, email, displayName, photoURL });
  } catch (error) {
    logger.error("Error retrieving user", {
      userId: req.params.userId,
      error: error.message,
    });
    res.status(500).json({ error: "Failed to retrieve user" });
  }
};
