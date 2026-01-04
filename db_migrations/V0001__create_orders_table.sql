-- Создание таблицы для хранения заявок с сайта
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    cake_type VARCHAR(100),
    message TEXT,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индекса для быстрого поиска по статусу
CREATE INDEX idx_orders_status ON orders(status);

-- Создание индекса для поиска по дате создания
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);