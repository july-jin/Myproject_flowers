const gulp=require("gulp");
const sass=require("gulp-sass");

//复制项目下的所有代码复制到服务器下的发布目录下
    gulp.task('copyfile',async ()=>{
        gulp.src('./**/*')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\A-Myproject'));
    })
// 执行监听任务
    gulp.task('watch',async ()=>{
        gulp.watch("*.html",async ()=>{
            gulp.src('*.html')
            .pipe(gulp.dest('D:\\phpStudy\\WWW\\A-Myproject'));
        })
        gulp.watch("*.php",async ()=>{
            gulp.src('*.php')
            .pipe(gulp.dest('D:\\phpStudy\\WWW\\A-Myproject'));
        })
        gulp.watch("js/*.js",async ()=>{
            gulp.src('js/*.js')
            .pipe(gulp.dest('D:\\phpStudy\\WWW\\A-Myproject\\js'));
        })
        gulp.watch("sass/**/*",async ()=>{
            gulp.src('sass/**/*')
            .pipe(sass())
            .pipe(gulp.dest('D:\\phpStudy\\WWW\\A-Myproject\\css'));
        })
        
    })
