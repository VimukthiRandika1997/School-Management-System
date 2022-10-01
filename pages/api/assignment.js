import dbConnect from '../../utils/dbConnect';
import Assignment from '/models/Assignment';


dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const Assignments = await Assignment.find({});

                res.status(200).json({ success: true, data: Assignments })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const Assignment = await Assignment.create(req.body);

                res.status(201).json({ success: true, data: Assignment })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}