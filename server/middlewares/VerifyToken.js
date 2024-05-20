import auth from "../config/firebase-config.js";

export const VerifyToken = async (req, res, next) => {
  try {
    // Check if the authorization header is present
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      // Respond with 401 if the authorization header is missing
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }

    // Split the header to get the token
    const token = authHeader.split(" ")[1];

    if (!token) {
      // Respond with 401 if the token is missing
      return res.status(401).json({ message: "Token is missing" });
    }

    // Verify the token using Firebase Auth
    const decodeValue = await auth.verifyIdToken(token);
    if (decodeValue) {
      // If the token is valid, attach the decoded value to the request object
      req.user = decodeValue;
      return next();
    } else {
      // Respond with 401 if the token is invalid
      return res.status(401).json({ message: "Unauthorized access" });
    }
  } catch (error) {
    // Handle any errors during token verification
    console.error("Error verifying token:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const VerifySocketToken = async (socket, next) => {
  try {
    // Check if the token is present in the socket handshake
    const token = socket.handshake.auth.token;

    if (!token) {
      // Call next with an error if the token is missing
      return next(new Error("Token is missing"));
    }

    // Verify the token using Firebase Auth
    const decodeValue = await auth.verifyIdToken(token);
    if (decodeValue) {
      // If the token is valid, attach the decoded value to the socket object
      socket.user = decodeValue;
      return next();
    } else {
      // Call next with an error if the token is invalid
      return next(new Error("Unauthorized access"));
    }
  } catch (error) {
    // Handle any errors during token verification
    console.error("Error verifying socket token:", error);
    return next(new Error("Internal Server Error"));
  }
};
