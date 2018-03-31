## :neutral_face: 環境構築

### :one: tools
- virtualbox -> https://www.virtualbox.org/  
- vagrant -> https://www.vagrantup.com/  
- ansible -> `brew install ansible`

### :two: vagrant
```sh
$ cd $git_repogitory/vagrant
$ vagrant up
```

### :three: hosts

```sh
192.168.34.11 local.faru.kingdom-eiyunokeifu.com
```

## :neutral_face: deploy

- sandbox

```sh
$ cd $git_repogitory/deploy
$ ./vendor/bin/dep deploy sandbox -vvv
```

- 開発

```sh
$ cd $git_repogitory/deploy
$ ./vendor/bin/dep deploy development -vvv
```

- 本番

```sh
$ cd $git_repogitory/deploy
$ ./vendor/bin/dep deploy production -vvv
```

## :neutral_face: サーバ script

### DB 初期化

```sh
$ ssh to@server
$ cd /path/to/app
$ STAGE=local php ./script/index.php db init
```

### Model 作成

```sh
$ ssh to@server
$ cd /path/to/app
$ STAGE=local ./script/vendor/bin/phalcon.php model --name=***
```

### Migration 作成

```sh
$ ssh to@server
$ cd /path/to/app
$ STAGE=local ./script/vendor/bin/phalcon.php migration --table=***,*** --action=generate
```

## :neutral_face: フロント開発

### 開発

```sh
$ cd $git_repogitory/app/assets
$ npm run dev
```

### sprite

```sh
$ cd $git_repogitory/app/assets
$ npm run sprite:*
```

### 画像圧縮

#### 下記が必要
  - https://imageoptim.com/mac
  - http://www.jpegmini.com/ (有料...)

```sh
$ cd $git_repogitory/app/assets
$ npm run image-min
```

### 音声 sprite

#### 下記が必要
  - `brew install ffmpeg --with-theora --with-libogg --with-libvorbis`

```sh
$ cd $git_repogitory/app/assets
$ npm run sounds
```
