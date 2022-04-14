package spring.board.stu.demo.dao;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class User {

    private String id;
    private String name;
    private String sex;
    private String bday;
    private String tel;

}
