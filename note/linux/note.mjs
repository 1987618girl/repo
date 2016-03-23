
#####################################################################################################
									第四，五章 首次登陆
#####################################################################################################

注意：
	单词前面两个-

-----------------------------------------
bc				计算器
	scale=10	保留10位数
-----------------------------------------

cal				显示日历
	2016	一年的日历
	12 2016	某月的日历


-----------------------------------------
date			显示时间
	+%Y

-----------------------------------------

ls				显示文件(list)
	-a	显示所有文件
	-l	显示文件详细信息
	-h	将占用的字节人性化显示
	-d	显示目录信息
	-i	显示 inode ID
	-s 	显示大小
	-1 	一行行显示
	--time=atime 	显示访问时间
	--time=ctime 	显示创建时间
	-R 	递归显示
	
-----------------------------------------

history			查看历史命令
	!numner	执行历史命令

-----------------------------------------

whatis		查看命令简短信息
makewhatis  生成whatis库

-----------------------------------------

whereis		查找命令的目录及帮助文档的目录
	-b 		只显示二进制文件
	-m 		显示帮助文档

-----------------------------------------

which		查找命令所在的路径及有无别名

-----------------------------------------

apropos		查看配置文件简短信息

-----------------------------------------

man			查看命令帮助
	/search
		n/N  查找
		^search  开头
man	number  passwd		查看第几张
man	-k clocl			查找命令片段
	q  					退出

-----------------------------------------

sync			将缓存中的内容写到磁盘中去
-----------------------------------------

shutdown 
		 -r now		重启	
		 -k			显示通知信息不会真的关机
		 -h 10 		10分钟后关机
		 -h 8:20	到时间自己关机

reboot		重启
		-f	强制重启

poweroff	关机
		-f	强制关机

-----------------------------------------

运行级别
	0　关机
	1　单用户
	2　不带网络的多用户
	3　带网络的多用户
	4　保留，用户可以自给定义
	5　图形界面的多用户
	6　重起系统

位置：/etc/rc.d
	K 开头表示不运行
	S 开头表示运行

1，设置开机模式为：命令模式
	systemctl set-default multi-user.target

2,设置开机模式为：图形模式
	systemctl set-default graphical.target

runlevel  //显示当前环境级别

init number //改变当前环境的级别

startx	//开启xwindow


#####################################################################################################
									第六章 Linux的文件权限与目录配置
#####################################################################################################

用户信息存放目录：
		/etc/passwd
用户密码存放目录：
		/etc/shadow
组的存放目录：
		/etc/group

-----------------------------------------

文件类型
	-	普通文件
	d 	文件夹
	b 	块设备（U盘）
	c 	字符型设备文件（鼠标）
	l 	快捷方式（软连接）

-----------------------------------------

chmod			修改权限
		[{ugoa}{+-=}{rwx}][文件或目录]
		[rwx=421][文件或目录]
		-R			递归修改

-----------------------------------------

chown -R root 				修改文件所有者
chown -R root[:.]root /aa		修改文件所有者及所属组

-----------------------------------------

chgrp -R root /aa		修改所属组

-----------------------------------------

文件夹的 x 代表是否可以进入该文件夹，如果没有 x，即使有w，其他用户也不可操作该文件将夹下的文件
文件夹的 w 代表是否可以操作文件夹中的文件，当文件夹有 w 时，即使其他用户没有读该文件夹中文件的权限，该用户也可以删除文件
文件夹没有 r 时，其他用户可以进入该文件夹但是不能读取该文件夹中的文件，但是可以创建文件，操作文件

-----------------------------------------

file filename		查看文件类型

-----------------------------------------
目录结构

	/bin
	/sbin
		相当于win32的作用

	/boot
		主要存放启动Linux系统所必需的文件，包括内核文件、启动菜单配置文件等
	
	/dev
		设备文件，字符设备，存储设备

	/etc 
		主要存放系统配置文件
		
	/lib
		主要存放一些库文件
		
	/media 		自动挂载
	/mnt 		手动挂载
		在某些Linux的发行版中用来挂载那些USB接口的移动硬盘（U盘）等
		
	/opt
		可以理解为安装可选程序的地方。安装源码包

	/proc
		内核参数，不占用磁盘大小

	/root
		根用户的家目录。里面存放根目录的数据、文件等。
		
	/usr
		主要存放安装的软件、系统共用的文件、内核源码等。

	/tmp
		临时文件

	/var
		缓存，日志，数据库文件

-----------------------------------------
1>
uname //查看是什么系统
	-i //架构
	-r //内核
	-a //查看所有

2>
cat /etc/redhat-release //CentOS Linux release 7.1.1503 (Final)

3>
hostnamectl
		status 			查看操作系统信息
		--static		查看静态主机名
		--transient 	查看瞬态主机名
		--pretty 		查看灵活主机名
4>
hostname    //主机名


#####################################################################################################
									第七章 Linux文件与目录管理
#####################################################################################################

mkdir			创建目录(make directories)
		-p	递归创建
		-p small/{bug,cat,hadoop}

-----------------------------------------

echo $PATH
		命令默认会在这些目录中去查找

PATH=$PATH:/home
		添加查找目录

-----------------------------------------

cp	[item] resource target			复制文件(copy)
	-r	复制目录
	-p	保留文件属性
	-u  新文件覆盖旧文件（旧文件不会覆盖新文件）
	-l  生成硬链接
	-f 	强制
	-a = -rfp
	-d 	默认情况下拷贝链接会把原文件拷贝出来，可以加该参数拷贝链接

ln				创建软硬链接
		-s	创建软连接
-----------------------------------------

mv				移动和改名(move)
		-i 		询问要不要删除（默认）
		-r 		递归
		-f 		强制

-----------------------------------------

alias ll
	显示别名

alias ll='ls -lh --color=auto'
	修改别名

-----------------------------------------

basename 		只显示文件名
dirname 		只显示目录名

-----------------------------------------

cat				浏览小文件信息
	-n	显示行号

-----------------------------------------

tac				反向浏览文件

-----------------------------------------

nl   		不算空行显示行号
		-d 		算空行显示行号

-----------------------------------------

more			浏览文件信息
	(空格)或f	翻页
	(Enter)		换行
	q或Q		退出

-----------------------------------------

less			浏览文件信息
	(空格)或f	翻页
	(Enter)		换行
	q或Q		退出
	上箭头		向上翻一行
	pgup		向上翻一页
	/XXX		搜索
	n			下一个搜索结果
	-N 			显示行号

-----------------------------------------

head			显示文件前几行
	-5	显示前5行

-----------------------------------------

tail-tailf			显示文件后几行
	-n	显示后几行
	-f	动态显示文件末尾内容（监视日志）

-----------------------------------------

od 			查看非文本文件
	-t c 		以ASCII码格式显示输出

strings		显示二进制文本文件

-----------------------------------------

rm				删除文件
	-r	删除目录
	-f	强制删除

rm -rf !(keep1 | keep2)    删除keep1，keep2文件之外的文件

-----------------------------------------

pwd				显示当前目录(print working directory)

-----------------------------------------

rmdir			删除空目录(remove empty directories)

-----------------------------------------

touch			创建文件

touch filename 		如果filename存在的话就修改其修改时间为当前时间

-----------------------------------------

umask 			权限过滤符
			文件 ： 666 - umask
			目录 ： 777 - umask
-----------------------------------------

lsattr		列出文件隐藏属性
chattr		修改文件隐藏属性
	+a （文件不可写，文件夹只可创建不可删除）
	+i （文件夹中，不可添加也不可删除文件）

-----------------------------------------

SUID  	在命令所有者的位置上出现S代表其他人在执行该命令时具有所有者的权限
		chmod u+s xx
		chmod 4333 xx

SGID 	如果一个文件夹的的所属组中出现了S，代表着之后在该文件夹下创建的文件都将会继承该文件夹的所属组
		chmod g+s xx
		chmod 2333 xx

SBIT 	只出现在文件夹的其他人权限位，意思是除了root和所有者外其他人即使有权限也不能删除
		chmod o+t xx
		chmod 1333 xx

-----------------------------------------

echo "hostname is `hostname`"		在字符串中执行命令
echo "hostname is $(hostname)"
	输出 ： hostname is smallbug

-----------------------------------------

locate		快速搜索（每天跟新一次数据库，新创建的文件可能找不到）
		-i	不区分大小写

updatedb	更新资料库
	/var/lib/mlocate/mlocate.db  	数据库位置

-----------------------------------------

find path -option [argu] 		查找文件

	-or 			或关联关系
	-name			根据名称查找
	-size +5M		根据大小查找
	-size -5M -size +3M  	查找大于3M小于5M的文件
	-user smallbug	根据所有者查找
	-group			根据所属组查找
	-ctime +1  		创建超过1天的文件
	-cmin +1		创建时间超过一分钟
	-amin			访问时间
	-newer filename 查找比当前文件比较新的文件
	-perm 222			根据权限查找（2 -> o, 22 -> go）
			+222 		ugo只要有一个写权限就行
			-222 		ugo必须都有写权限

-----------------------------------------



-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------