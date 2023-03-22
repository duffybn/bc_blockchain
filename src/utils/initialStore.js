/* sample data store*/
export default { 
    currentUserId: "cole",
    posts:[
        {   
            id:"post-1",
            userId:"Bill",
            desc: "I loved this professor",
            grade: "9.5"

        },
        {
            id:"post-2",
            userId:"nick",
            desc: "I loved this professor",
            grade: "9.5"
        },
        {
            id:"post-3",
            userId:"flash",
            desc: "I loved this professor",
            grade: "9.5"
        },
        {
            id:"post-4",
            userId:"judy",
            desc: "I loved this professor",
            grade: "9.5"
        },
        {
            id:"post-5",
            desc: "I loved this professor",
            grade: "9.5" 
        },
        {
            id:"post-6",
            userId:"judy",
            photo:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fpost6.png?v=1614382910363",
            desc:"Having #goodtimes with folks here",
            datetime: "2020-02-06T22:45:28Z",
        },
    ],
    likes:[
        {
            userId:"judy",
            postId:"post-1",
            datetime:"2020-02-09T22:50:40Z"
        },
        {
            userId:"nick",
            postId:"post-2",
            datetime:"2020-02-09T22:51:40Z"
        },
        {
            userId:"flash",
            postId:"post-2",
            datetime:"2020-02-09T22:54:20Z"
        },
        {
            userId:"judy",
            postId:"post-3",
            datetime:"2020-02-09T22:53:40Z"
        }
    ]
}

