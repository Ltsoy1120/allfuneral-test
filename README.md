# Funeral Company Manager

Тестовое задание для [AllFuneral](https://test-task-api.allfuneral.com/)

## 📋 Описание

Приложение для отображения и редактирования информации об организации:

- Просмотр информации о компании
- Редактирование данных организации и контактных данных
- Загрузка и удаление фотографий
- Простая авторизация по имени

## 🛠️ Стек технологий

- **React** + **TypeScript**
- **MobX** — для управления состоянием
- **Vite** — сборка проекта
- **React Router** — навигация
- **SCSS (SASS)** — стили
- **Axios** — для HTTP-запросов

## 🚀 Как запустить

```bash
git clone https://github.com/Ltsoy1120/allfuneral-test.git
cd allfuneral-test
npm install
npm run dev
```

## 🔑 Авторизация

Для входа достаточно ввести имя пользователя ( USERNAME )
Токен сохраняется в localStorage.

## 📁 Структура проекта

```
├── public/ # Публичные файлы, доступны напрямую по URL
│ └── icons.svg # SVG-спрайт с иконками
├── src/
│ ├── api/ # Настройка axios-инстанса
│ ├── app/ # Layout, роутинг, шрифты
│ ├── assets/ # Вспомогательные изображения
│ ├── entities/ # Типы, DTO, API-запросы (company, contact)
│ ├── features/ # Формы, карточки и бизнес-логика
│ ├── pages/ # Страницы (CompanyPage, AuthPage)
│ ├── shared/ # Общие компоненты (Button, Input, Modal и пр.)
│ ├── stores/ # MobX store'ы
│ └── styles/ # Общие стили, переменные и миксины
```

## 📎 Ссылка на репозиторий

https://github.com/Ltsoy1120/allfuneral-test

## 📎 Ссылка на демонстрацию

https://allfuneral-test-ywyl.vercel.app
