import { Request, Response } from 'express';

import AuthenticateUserService from '../../../services/AuthenticateUserService';

export default {
    async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const authenticateUser = new AuthenticateUserService();

        try {
            const { user, token } = await authenticateUser.execute({ email, password });

            return response.status(200).json({ user, token });
        } catch (err) {
            return response.status(400).json({ message: 'Incorrect email/password combination.' });
        }
    }
}