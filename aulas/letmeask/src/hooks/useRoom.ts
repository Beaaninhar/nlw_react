import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type FirebaseQuestions = Record<
    string,
    {
        author: {
            name: string;
            avatar: string;
        };

        content: string;
        isAnswer: boolean;
        isHignlighted: boolean;
    }
>;

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    };

    content: string;
    isAnswer: boolean;
    isHignlighted: boolean;
};

export function useRoom(roomId: string) {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on("value", (room) => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

            const parseQuestions = Object.entries(firebaseQuestions).map(
                ([key, value]) => {
                    return {
                        id: key,
                        content: value.content,
                        author: value.author,
                        isHignlighted: value.isHignlighted,
                        isAnswer: value.isAnswer,
                    };
                }
            );

            setTitle(databaseRoom.title);
            setQuestions(parseQuestions);
        });
    }, [roomId]);

    return { questions, title };
}
