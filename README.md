# PROJECTMATE - find your project mate online <a href="https://www.buymeacoffee.com/rohit.dasu" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important; width: 150px !important; align-items:center; box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"></a>

![PROJECTMATE find your project mate online](https://user-images.githubusercontent.com/48400770/190438248-fc0f3e42-c6d3-4d07-bcba-10e7fece4bc2.png)

A web app where you can find contributors for your open-source project or as an individual contributor you can find open-source projects. Best place to start open-source contribution.
Find people who have the same vision as you do and contribute for building amazing products.

## Demo

Check out the web app: [https://opportunityboard.net](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Connect with us

As a community, we always encourage people to share their thoughts and ideas. Do you want to talk to us? Join our Discord server by clicking the badge below.

[![FIGMA - View](https://img.shields.io/badge/Figma-View-2ea44f?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/proto/jwqIT3fE5PPi8UkibeKuZf/final-ALU-opportunity-board?node-id=6-820&starting-point-node-id=40%3A936-board)

## Tech stack

![React](https://img.shields.io/badge/React-305FCB?style=for-the-badge&logo=next.js&logoColor=white)
![tailwind css](https://img.shields.io/badge/tailwind_css-305FCB?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-305FCB?style=for-the-badge&logo=mongodb&logoColor=white)
![SQLalchemy](https://img.shields.io/badge/SQLalchemy-305FCB?style=for-the-badge&logo=prisma&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-305FCB?style=for-the-badge&logo=figma&logoColor=white)

1. Frontend - **React**
2. CSS Framework - **Tailwind CSS**
3. Backend - **Flask APIs + Auth0 + PostgreSQL + SQlachemy ORM**
4. Design & Prototype - Figma

## Installation steps

1. Fork the project

2. Clone the project by running
   ```sh
   git clone https://github.com/<your-github-username>/opportunity-board.git
   ```
3. Go into the project directory
   ```sh
   cd opportunity-board
   ```
4. Create an `.env` file from the `.env.template` file (copy everything in the `.env.template` file and put it in the `.env` file with appropriate values).

   - `POSTGRES_URI` is the `connection string` which you'll get from mongodb [for reference](https://www.mongodb.com/docs/manual/reference/connection-string/).
   - `GOOGLEAUTH_SECRET` Just pass any `random string` or you can quickly create a good value on the command line via this `openssl command`.

   ```sh
   openssl rand -base64 32
   ```

5. Run docker container
   ```sh
   docker compose up
   ```
6. Go to
   ```sh
   http://localhost:5173/
   ```
7. Backend running at
   ```sh
   http://localhost:3000/
   ```

## Contributing Guidelines

Any contributions you make are truly appreciated, go to our [CONTRIBUTING.md](https://github.com/ALU-Opportunity-Board
/opportunity-board/blob/main/CONTRIBUTING.md) file for more information.

## Code of Conduct

View [CODE_OF_CONDUCT.md](https://github.com/ALU-Opportunity-Board
/opportunity-board/blob/main/CODE_OF_CONDUCT.md)

## License

opportunity-board is licensed under the MIT License - see the [LICENSE](https://github.com/ALU-Opportunity-Board
/opportunity-board/blob/main/LICENSE) file for details.

## Thanks to all Contributors

<a href="https://github.com/ALU-Opportunity-Board
/opportunity-board/graphs/contributors">
<img src="https://contrib.rocks/image?repo=rohitdasu/opportunity-board" />
</a>
