package spring.board.stu.demo.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Entity
@NoArgsConstructor
@Table(name = "ACCOUNT")
public class AccountEntity {

    @Id
    @Column(length = 20, nullable = false)
    private String id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 24, nullable = false)
    private String password;

    @Column(length = 1, nullable = false)
    private String sexCd;

    @Column(length = 11)
    private String tel;

    @Column(length = 8)
    private String bdayYmd;

    @Column(length = 1)
    private String delYn;

    @Builder
    public AccountEntity(String id, String name, String password, String sexCd, String tel, String bdayYmd, String delYn) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.sexCd = sexCd;
        this.tel = tel;
        this.bdayYmd = bdayYmd;
        this.delYn = delYn;
    }
}
