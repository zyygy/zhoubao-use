# zhoubao
一个用于研究生/博士/工作的每周工作汇报系统，springboot+vue+mysql。支持在线写周报、上传图片，支持pdf、markdown格式的周报文件。支持共享查看。

# 效果展示

## 登录界面

首页北京与bing.com图片同步,每天都有新鲜感。

![image-20200821113625685](img/image-20200821113625685.png)

## Markdown编辑器

支持在线使用Markdown语法写周报。

![登录及markdown展示](img/登录及markdown展示.gif)

## 表格式周报与图片上传

支持以在线表格的形式填写每周工作情况，同时还支持上传图片进行说明。

![在线html周报展示](img/在线html周报展示.gif)

# 部署方法

### 创建数据库

创建数据库，然后导入`zhoubao.sql`文件定义的结构。

### 创建阅览账号：用于分配给老师或领导

在user表中插入一条记录，user.type设置为1。为1表示是阅览账号，该类型账户目前可以阅览所有用户的周报。

### 填写数据库配置

只需修改位于`src\main\resources\application.yml`的配置：

```properties
#配置周报相关位置      
zhoubao:
	#周报存储位置
    location: D:/ipv6download/                  //自己创建一个文件夹，存储的周报信息都会保存在这里
    #周报数据库配置
    database-config: 
      #数据库名
      name: YourDatabaseName                     
      #数据库用户
      username: username
      #数据库密码
      password: password
```

> ”spring:
>   profiles: prod“下边一段的配置用于prod环境（生产环境）的相应配置（在启动jar包时指定spring.profiles选项可进入prod环境，例如：
>
> `java -jar zhoubao.jar --spring.profiles.active=prod`）

## 启动项目
前端执行：
1.在vue控制台中输入npm run dev    
2.若出现报错在控制台输入npm install webpack-dev-server  加载web包  
3.输入npm install
4.重新进入控制台输入npm run dev

后端执行：
1.在idea中运行后端项目，打开进入之后点击new-->Project from Existing Sources 选择文件下载解压后的路径，选择
2.选择maven 点击创建，创建项目。
3.修改application.yml中的数据库配置。包括      url: jdbc:mysql://127.0.0.1:3306/zhoubao?useUnicode=true&characterEncoding=utf-8&serverTimezone=GMT
                                            username: root
                                           password: root
其中数据库名称及名字和密码也需要更改；
4。将zhoubao.sql导进数据库，添加好用户账号密码即可。
## 报错情况
1.若出现数据库无法连接问题，或者忘记数据库mysql密码，可以参照https://zhuanlan.zhihu.com/p/561515580解决，修改密码。
2.数据库连接问题还有可能是被占用端口，需要进入windous下的services关闭禁用其他mysql服务，再次点击运行即可。




