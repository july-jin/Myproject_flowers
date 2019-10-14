<?php
    header("Content-type:text/html;charset=utf-8");

    // $username = $_POST['username'];
    $userId = $_POST['userId'];
    $userpass = $_POST['userpass'];

    $con=mysql_connect("localhost","root","root");

    if(!$con){
        echo("数据库出错".mysql_error());
    }else{
        //2)、选择库（选择目的地）
        mysql_select_db("userinfo_db",$con);

        //3)、执行SQL语句（数据传输）
        //3.1)
        $sqlstr="select * from user_tab where Id='$userId'";//查询该用户名在数据库中有没有。 
        $result = mysql_query($sqlstr,$con);
        $rows = mysql_num_rows($result);//获得结果的行数
            if($rows>0){
                //4)、关闭数据库
                mysql_close($con);
                echo "-1";//用户名被使用
            }else{
                $sqlstr="insert into user_tab(Id,userpass) values('$userId','$userpass')";
                $result = mysql_query( $sqlstr,$con);
                //4)、关闭数据库
                mysql_close($con);
                //3、响应
                if($result!=1){
                    echo "0";//注册失败用0
                }else{
                    echo "1";//注册成功用1
                }
            }
    }
    