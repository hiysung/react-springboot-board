package spring.board.stu.demo.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.board.stu.demo.domain.entity.AccountEntity;

import java.util.List;

public interface AccountRepository extends JpaRepository<AccountEntity, String> {

    List<AccountEntity> findAll();

    AccountEntity findUserById(String id);
}
