package com.zmh.sprintbootdemo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 对系统后台进行跨域访问进行配置
 */
@Configuration
public class CorsConfig extends WebMvcConfigurerAdapter {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")// 1 设置访问源地址
                .allowCredentials(true)// 2 设置访问源请求头
                .allowedMethods("GET", "POST", "DELETE", "PUT") // 3 设置访问源请求方法
                .maxAge(3600);
    }
}
