import React, { useEffect, useState } from 'react';
import './Form.scss';
import "bulma/css/bulma.min.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';

export const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [field, setField] = useState('');
  const [language, setLanguage] = useState('');
  const [comment, setComment] = useState('');
  const [allInput, setAllInput] = useState(false);

    const redirect = useNavigate();


  useEffect(() => {
    if (name.trim().length > 0 &&
    fullName.trim().length > 0 &&
    email.trim().length > 0 &&
    comment.trim().length > 0) {
      setAllInput(true);
    } else {
      setAllInput(false);
    };
  });

  const clear = () => {
    setName("");
    setPhone("");
    setGroup("");
    setFullName("");
    setEmail("");
    setField("");
    setLanguage("");
    setComment("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clear();
    redirect('/table');
  };

  const handlCklick = () => {
    redirect('/table');
  };

  return (
    <div className="form-bg">
      <div className="add">
        <header className="add__header add-header">
          <div className="add-header__name">
            <p className="add-header__plus">+</p>
            Редагувати сутність
          </div>
          <button
            type="submit"
            onClick={handlCklick}
            className="add-header__button"
            style={{ cursor: "pointer",}}
          >
            X
          </button>
        </header>
        <form className="main" onSubmit={handleSubmit}>
          <div className="main__column">
            <label className="label">
              <p className="label__name">
                Назва
              </p>
              <input
                type="text"
                placeholder="Статус посилки"
                className="inputCustom"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>

            <label className="label">
              <p className="label__name">
                Номер телефону
              </p>
              <PhoneInput
                country="ua"
                defaultMask='(...) ..-..-..'
                masks={{ua: '(...) ..-..-..', at: '(....) ...-....'}}
                alwaysDefaultMask
                areaCodes={{ us: ['332'] }}
                inputProps={{
                  name: 'phone',
                  country: 'ua',
                  required: true,
                }}
                value={phone}
                onChange={() => setPhone(phone)}
                inputStyle={{
                  border: '1px solid rgba(234, 242, 255, 1)',
                  width: '275px',
                  height: '40px',
                }}
              />
            </label>

            <label className="label">
              <p className="label__name">
                Група користувачів
              </p>
              <div className="select">
                <select
                value={group}
                className="inputCustom"
                onChange={(event) => setGroup(event.target.value)}
                required
              >
                <option className="inputCustom">
                  Оберіть групу
                </option>
                <option className="inputCustom">
                  Group 1
                </option>
                <option className="inputCustom">
                  Group 2
                </option>
              </select>
              </div>
            </label>

            <label className="label">
              <p className="label__name">
                Додати нове поле
              </p>
              <div className="select">
                <select
                className="inputCustom"
                value={field}
                onChange={(event) => setField(event.target.value)}
                required
              >
                <option>
                  заголовок
                </option>
                <option>
                  текст
                </option>
                <option>
                  текст
                </option>
                <option>
                  текст
                </option>
              </select>
              </div>
            </label>
          </div>
          <div className="main__column">
            <label className="label">
              <p className="label__name">
                Ім'я та фамілія
              </p>
              <input
                type="text"
                placeholder="Через пробіл"
                className="inputCustom"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
              />
            </label>
            <label className="label">
              <p className="label__name">
                Email
              </p>
              <input
                type="email"
                placeholder="example.com"
                className="inputCustom"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label className="label">
              <p className="label__name">
                Мова
              </p>
              <div className="select">
                <select
                className="inputCustom"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                required
              >
                <option>Оберіть мову</option>
                <option>Українська</option>
                <option>Англійська</option>
              </select>
              </div>
            </label>
            <label className="label">
              <p className="label__name">
                Значення поля
              </p>
              <input
                className="inputCustom"
                placeholder="Введіть значення"
                type="text"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required
              />
            </label>
            <button
            className="button is-info is-outlined buttonCustom"
            type="submit"
            disabled={!allInput}
          >
            Додати користувача
          </button>  
          </div>
        </form>
      </div>
    </div>
  );
};
