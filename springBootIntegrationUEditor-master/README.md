# springBoot 集成百度富文本框 UEditor，多模块方式
## 摘要
1. 项目为多模块方式。后台项目（ueditor.backend），在需要用到的项目引用即可，几乎无代码侵入。
1. 前端文件，包括 config.json，统一放到 static/uEditor，可以无视该目录，只管引用即可，配置文件一旦配置好，也基本上不需要修改。线上线下，根据情况，可分别配置。
1. 上传目录，建议配置到非 web 目录之下，因为上传的图片需要保留。如果配置到 web 目录，在项目更新时，可能会被不小心清理掉。
1. 在点击撤销、重试两个功能按键时，会有 js 脚本错误，官方原版即是如此，尝试修复无果，不影响使用，可无视之。
    ```
    ueditor.all.min.js:8 The given range isn't in document.
    ```

## 上效果图
![](/ueditor.frontend/src/main/resources/static/img/uEditorDemo.png)

## 后台项目
### 关键依赖
```xml
        <dependency>
            <groupId>org.json</groupId>
            <artifactId>json</artifactId>
            <version>20180130</version>
        </dependency>
        <dependency>
            <groupId>commons-fileupload</groupId>
            <artifactId>commons-fileupload</artifactId>
            <version>1.3.3</version>
        </dependency>
        <dependency>
            <groupId>commons-codec</groupId>
            <artifactId>commons-codec</artifactId>
            <version>1.11</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-web</artifactId>
            <version>5.0.6.RELEASE</version>
            <scope>compile</scope>
        </dependency>
```

### 关键配置项
ConfigManager.configFileName
```
private static final String configFileName = "static/uEditor/config.json";
```

## 前台项目
### 关键配置项
static/uEditor/config.json
```
basePath":"C:/temp",/* 上传文件的基本路径，需要与application.yml配置的【uEditor.upload.path】保持一致 */
"imagePathFormat": "/uEditorUploadImages/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
```

application.yml
```
uEditor.upload.path: C:/temp # 需要与 static/uEditor/config.json 的配置项【basePath】保持一致。
spring.mvc.static-path-pattern: /**
spring.resources.static-locations: classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/public/,file:${uEditor.upload.path}
```

Controller
必须配置的路由是：@RequestMapping("/uEditor/config")
```java
package ueditor.frontend.Controller;

import com.baidu.ueditor.ActionEnter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Controller
public class UEditorController {
    @RequestMapping("/uEditorDemo")
    public String uEditorDemo(){
        return "/uEditorDemo";
    }

    @RequestMapping("/uEditor/config")
    public void config(HttpServletRequest request, HttpServletResponse response) {
        response.setContentType("application/json");
        String rootPath = request.getSession().getServletContext().getRealPath("/");

        try {
            String exec = new ActionEnter(request, rootPath).exec();
            PrintWriter writer = response.getWriter();
            writer.write(exec);
            writer.flush();
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## Demo 页
见 uEditorDemo.html 以及对应的 uEditorDemo.js <br/>
获取文本框录入的数据，请见 uEditorDemo.js 文件下的 getContent 方法：
```
function getContent() {
    // var arr = [];
    // arr.push("使用editor.getContent()方法可以获得编辑器的内容");
    // arr.push("内容为：");
    // arr.push(UE.getEditor('editor').getContent());
    // alert(arr.join("\n"));
    $("#divApiCallInfo").html("使用editor.getContent()方法可以获得编辑器的内容");
    $("#txtUEditorContent").val(UE.getEditor('editor').getContent())
}
```