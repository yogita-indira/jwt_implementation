import { generateToken } from '../utils/jwtUtils.js';
import bcrypt from 'bcrypt';
import User from "../schemas/user_model.js";

export default class AuthController {
    static async logIn(req, res) {
        try {
            const { username, password } = req.body;

            // Find the user by username
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Compare the provided password with the hashed password stored in the database
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Generate JWT token
            const token = generateToken({ employeeId: user._id.toString() });

            // Return the token in the response
            res.status(200).json({ success: true, message: 'login successed', token });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async Register(req, res) {
        try {
            const { employeeId, username, password, email, role } = req.body;

            const existingUser = await User.findOne({ $or: [{ username }, { email }] });
            if (existingUser) {
                return res.status(400).json({ error: 'Username or email already exists' });
            }

            // Hash the password using bcrypt
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user instance
            const newUser = new User({
                employeeId,
                username,
                password: hashedPassword,
                email,
                role,
            });

            // Save the new user to the database
            await newUser.save();

            // Return success response
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
