package spring.board.stu.demo.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.board.stu.demo.domain.entity.AccountEntity;

public interface AccountRepository extends JpaRepository<AccountEntity, String> {

}
