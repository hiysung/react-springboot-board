package spring.board.stu.demo;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import spring.board.stu.demo.domain.entity.AccountEntity;
import spring.board.stu.demo.domain.repository.AccountRepository;

import java.util.List;

@SpringBootTest
public class AccountRepositoryTest {

    @Autowired
    AccountRepository accountRepository;

//    @AfterEach
//    public void cleanUp() {
//        accountRepository.deleteAll();
//    }

    @Test
    public void registerAccount() {
        String id = "hyesung";
        String name = "최혜성";
        String password = "1234";
        String sexCd = "M";
        String tel = "01011112222";
        String bdayYmd = "19920121";
        String delYn = "N";

        accountRepository.save(AccountEntity.builder()
                .id(id)
                .name(name)
                .password(password)
                .sexCd(sexCd)
                .tel(tel)
                .bdayYmd(bdayYmd)
                .delYn(delYn)
                .build());

        List<AccountEntity> accountEntityList = accountRepository.findAll();

        AccountEntity accountEntity = accountEntityList.get(0);

    }

}
