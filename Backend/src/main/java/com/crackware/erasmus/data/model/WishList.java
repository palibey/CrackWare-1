package com.crackware.erasmus.data.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
@Getter
@Setter
public class WishList extends List{
    @OneToMany
    private Set<Course> courses;
}
