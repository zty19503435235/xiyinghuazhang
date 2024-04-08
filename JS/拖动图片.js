// JavaScript Document
    var boxDiv,box2Div,msgDiv,img1;
    window.onload = function(){
        boxDiv=document.getElementById("box1");
        box2Div=document.getElementById("box2");
        //若允许被放置元素，必须阻止其默认的处理方式
        boxDiv.ondragover=function(e){
            //盒子１
            e.preventDefault();
        }
        box2Div.ondragover=function(e){
            //盒子２
            e.preventDefault();
        }
        //规定了被拖动的数据
        img1.ondragstart=function(e){
            e.dataTransfer.setData("imgId","img1");
        }
        //当放置被拖数据时 发生的事件
        boxDiv.ondrop=dropImghandler;
        box2Div.ondrop=dropImghandler;
    }
    //封装图片拖拽的处理事件
    function dropImghandler(e){
        e.preventDefault();
        //取到数据，放在相应的位置
        var img1=document.getElementById(e.dataTransfer.getData("imgId"));
        e.target.appendChild(img1);//e.target获取指定目标源
    }