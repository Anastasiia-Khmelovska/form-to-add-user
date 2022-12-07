import React, { useState } from 'react';
import "bulma/css/bulma.min.css";
import { users } from './users';
import { Pagination } from '../Pagination/Pagination';
import { Menu } from '../Menu/Menu';
import icon from '../../imgs/1.svg';
import './Table.scss';



export const Table: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedId, setSelectedId] = useState<number | null>(null);



  const handlerClick = (id: number) => {
    setIsOpen(!isOpen);
    setSelectedId(id);
    console.log(isOpen);
  };

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <table className="table is-fullwidth">
            <thead>
          <tr>
            <th></th>
            <th>Назва</th>
            <th>URL</th>
            <th>Автор</th>
            <th>Створено</th>
          </tr>
        </thead>
        <tbody>
            {currentUsers.map(user => 
            <tr className='item-with-popup'>
                <th>
                    {isOpen && selectedId == user.id 
                    && (
                    <Menu />
                  )}
                  <span                  
                    style={{ cursor: "pointer",}}
                      onClick={() => handlerClick(user.id)}
                  >
                    <img src={icon} alt="dot" />
                  </span>
                </th>
                <th className='isCustom'>{user.status}</th>
                <th className='isCustom'>{user.link}</th>
                <th className='isCustom'>{user.name}</th>
                <th className='isCustom'>{user.date}
                    <br />
                    {user.time}
                </th>
            </tr>)}
        </tbody>
        </table>
        <Pagination
        itemsPerPage={itemsPerPage}
        totalUsers={users.length}
        paginate={paginate}
        />
        </div>
    );
};