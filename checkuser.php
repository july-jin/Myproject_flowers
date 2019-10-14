<?php
    header("Content-type:text/html;charset=utf-8");

    $userId = $_POST['userId'];
    $userpass = $_POST['userPass'];

    $con=mysql_connect("localhost","root","root");

    if(!$con){
        echo("数据库出错啦！".mysql_error());
    }else{
        mysql_select_db("userinfo_db",$con);

        $sqlstr="select * from user_tab where Id='$userId'";//查询该用户名在数据库中有没有。 
        $result = mysql_query($sqlstr,$con);
        $rows = mysql_num_rows($result);//获得结果的行数
        if($rows>0){
            //4)、关闭数据库
            mysql_close($con);
            echo "1";//登录成功
        }else{
            echo "0";//登录失败
        }
    }