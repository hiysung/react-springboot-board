package spring.board.stu.demo.service;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.board.stu.demo.domain.entity.AccountEntity;
import spring.board.stu.demo.domain.repository.AccountRepository;

@AllArgsConstructor
@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public String saveAccount(AccountEntity accountEntity) {
        return accountRepository.save(accountEntity).getId();
    }
}
