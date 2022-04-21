package spring.board.stu.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.board.stu.demo.domain.entity.AccountEntity;
import spring.board.stu.demo.service.AccountService;

import java.util.HashMap;
import java.util.Map;

@RestController()
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public Map<String, Object> registerUser(@RequestBody AccountEntity accountEntity) throws Exception {
        Map<String, Object> resultMap = new HashMap<String, Object>();

        try {
            System.out.println(accountEntity.getId());
            String id = accountService.saveAccount(accountEntity);

            resultMap.put("id", id);
            resultMap.put("isSuccess", "SUCCESS");
        }
        catch (Exception ex) {
            ex.printStackTrace();
            resultMap.put("isSuccess", "FAIL");
        }

        return resultMap;
    }

    public Map<String, Object> signInAccount(@RequestBody Map<String, Object> map) throws  Exception {
        Map<String, Object> resultMap = new HashMap<String, Object>();

        try {
            String id = map.get("id").toString();
            String pwd = map.get("password").toString();
            System.out.println(id);
            System.out.println(pwd);

            resultMap.put("isSuccess", "SUCCESS");
        }
        catch (Exception ex) {
            resultMap.put("isSuccess", "FAIL");
        }

        return resultMap;
    }
}
