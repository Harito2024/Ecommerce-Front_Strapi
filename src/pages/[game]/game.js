import { BasicLayout } from "@/layouts";
import { Game } from "@/components/Game";
import { Separator } from "@/components/Shared";
import { Seo } from "@/components/Shared";
export default function GamePage(props) {
  const { game } = props;
  const games = game;

  const wallpaper = games.attributes.wallpaper;
  const urlStrapi2 = "https://ecommerce-backstrapi.up.railway.app";
  const urlStrapi = "http://localhost:1337";
  const wallpaperUrl = `${urlStrapi}${wallpaper.data.attributes.url}`;
  const screenshots = game.attributes.screenshots.data;

  return (
    <>
      <BasicLayout>
        <Game.HeaderWallpaper image={wallpaperUrl} />
        <Game.Panel gameId={game.id} game={game.attributes} />

        <Separator heigth={50} />

        <Game.Info game={game.attributes} />

        <Separator heigth={30} />

        <Game.Media video={game.attributes.video} screenshots={screenshots} />

        <Separator heigth={50} />
      </BasicLayout>
    </>
  );
}
