export interface chatFeedProps{
    chats: [id: Chats];
    activeChat: number;
    userName: string;
    messages: { id: undefined | ChatMessages };
}

export interface ChatMessages{
    id: number;
    sender: ChatsUsername;
    created: string;
    attachments: [];
    sender_username: string;
    text: string;
    custom_json: {}
}

interface Chats{
    access_key: string;
    userName: ChatsUsername;
    attachments: [];
    created: string;
    custom_json: {};
    id: number;
    is_authenticated: boolean;
    is_direct_chat: boolean;
    last_message: {
        attachments: [];
        created: string;
        custom_json: null | {};
        sender_username: string;
        text: string;
    };
    people: [
        {
            chat_updated: string;
            last_read: null | string;
            person: ChatsUsername;
        }
    ];
    title: string;
}

interface ChatsUsername{
    avatar: string;
    custom_json: {};
    first_name: string;
    is_online: boolean;
    last_name: string;
    username: string;
};