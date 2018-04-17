FROM php:7.0-fpm

ARG uid

COPY ./php.ini /usr/local/etc/php/conf.d/php.ini
COPY ./zz-docker.conf /usr/local/etc/php-fpm.d/zz-docker.conf

RUN sed -i "s/listen = 127.0.0.1:9000/listen = 127.0.0.1:4000/" /usr/local/etc/php-fpm.d/www.conf

RUN apt-get update && apt-get install -y libldap2-dev libpng12-dev libjpeg-dev libpq-dev \
	&& rm -rf /var/lib/apt/lists/* \
	&& docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr \
	&& docker-php-ext-install gd mbstring opcache pdo pdo_mysql pdo_pgsql zip \
	&& docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/ \
	&& docker-php-ext-install ldap

RUN yes | pecl install xdebug \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=off" >> /usr/local/etc/php/conf.d/xdebug.ini

USER ${uid}
