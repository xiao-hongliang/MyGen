package com.hy.tools.annotaion;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * <pre>
 * 标识字段注释
 * </pre>
 * 
 * @author 黄云
 * 2015年12月14日
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.TYPE , ElementType.FIELD, ElementType.METHOD })
public @interface AComment {
	
	public abstract String comment() default "";//字段注释
	
}
