$(function () {
    //获取本人信息
    $.get("/chat/me", function (res) {
        var socket = io.connect('http://localhost:3000');
        socket.on('new', function (data) {   //接受数据
            // alert(data.content)
            updateData(data)
        });
        $(".input button").click(function () {
            var text = $(".input input").val()
            $(".input input").val("")
            var username = res.username
            var d=new Date()
            var date=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            socket.emit('send', {content:text,username:username,date:date});
        })
    })
    //更新数据
    function updateData(data) {
        $(".content .wrap").append("<div class='record'><p>"
            +data.content +"</p><p><span>"
            +data.date +"</span><span>"
            +data.username+"</span></p></div> ")
    }

})
