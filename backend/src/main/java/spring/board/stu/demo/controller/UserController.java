package spring.board.stu.demo.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController()
@RequestMapping("/user")
public class UserController {

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public Map<String, Object> registerUser(@RequestBody Map<String, Object> paramMap) throws Exception {
        Map<String, Object> resultMap = new HashMap<String, Object>();

        try {
            System.out.println(paramMap);
            String id = paramMap.get("id").toString();
            String name = paramMap.get("name").toString();
            String pw = paramMap.get("pw").toString();
            String bday = paramMap.get("bday").toString();
            String sex = paramMap.get("sex").toString();
            String tel = paramMap.get("tel").toString();

            resultMap.put("data", "SUCCESS");
        }
        catch (Exception ex) {
            resultMap.put("data", "FAIL");
        }

        return resultMap;
    }

}
