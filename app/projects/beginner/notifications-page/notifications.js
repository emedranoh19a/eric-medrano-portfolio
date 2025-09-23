import { angela, anna, imgChess, jacob, kimberly, mark, nathan, rizky } from "./imageIndex"

export const notifications = [
    // Mark Webber reacted to your recent post My first tournament today!
    //         1m ago
    {
        subject: "Mark Webber",
        src: mark,
        predicate: "reacted to your recent post My first tournament today!",
        isRead: false,
        date: "1m ago",
        highlight: "My first tournament today!",
        highlightType: "normal",//it can also be a link, or none.
        photo: mark,//for conditional rendering
        boxMessage: ""//for conditional rendering as well
    },
    //         Angela Gray followed you
    //         5m ago
    {
        subject: "Angela Gray",
        src: angela,
        predicate: "followed you",
        isRead: false,
        date: "5m ago",
        highlight: "",
        highlightType: "none",
        photo: angela,
        boxMessage: ""
    },

    //         Jacob Thompson has joined your group Chess Club
    //         1 day ago
    {
        subject: "Jacob Thompson",
        src: jacob,
        isRead: false,
        predicate: "has joined your group Chess Club",
        date: "1 day ago",
        highlight: "Chess Club",
        highlightType: "link",
        photo: jacob,
        boxMessage: ""
    },
    //         Rizky Hasanuddin sent you a private message
    //         5 days ago
    {
        subject: "Rizky Hasanuddin",
        src: rizky,
        predicate: "sent you a private message",
        date: "5 day ago",
        isRead: true,
        highlight: "",
        highlightType: "none",
        photo: rizky,
        boxMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm really having lots of fun and improving my game."
    },
    //         Kimberly Smith commented on your picture
    //         1 week ago
    {
        subject: "Kimberly Smith",
        src: kimberly,
        predicate: "commented on your picture",
        date: "1 week ago",
        isRead: true,

        highlight: "",
        highlightType: "none",
        photo: imgChess,
        boxMessage: ""
    },
    //         Nathan Peterson reacted to your recent post 5 end - game strategies to increase your win rate
    // 2 weeks ago
    {
        subject: "Nathan Peterson",
        src: nathan,
        predicate: "reacted to your recent post 5 end - game strategies to increase your win rate",
        date: "1 week ago",
        isRead: true,
        highlight: "5 end - game strategies to increase your win rate",
        highlightType: "normal",
        photo: nathan,
        boxMessage: ""
    },
    //         Anna Kim left the group Chess Club
    // 2 weeks ago 
    {
        subject: "Anna Kim",
        src: anna,
        predicate: "left the group Chess Club",
        date: "2 weeks ago",
        isRead: true,
        highlight: "Chess Club",
        highlightType: "link",
        photo: anna,
        boxMessage: ""
    },
]

