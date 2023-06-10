
package com.itg.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
public class DemoSecurityConfig {

    /*
    Users with jdbc support, no hard-coding. Default table names: users and authorities
    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource){
        return new JdbcUserDetailsManager(dataSource);
    }
    */

    @Bean
    public InMemoryUserDetailsManager userDetailsManager() {
        UserDetails john = User.builder()
                .username("admin")
                .password("{noop}admin123")
                .roles("ADMIN")
                .build();

        return new InMemoryUserDetailsManager(john);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests(configurer ->
                configurer
                        .requestMatchers(HttpMethod.GET, "/api/products").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/api/products/**").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/api/products").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT,"/api/products").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE,"/api/products/**").hasRole("ADMIN")
        );
        //use http basic auth
        http.httpBasic(Customizer.withDefaults());

        //disable cross site request forgery - csrf
        http.csrf(csrf -> csrf.disable());

        return http.build();
    }
}
