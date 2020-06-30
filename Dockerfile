FROM node:10.21.0-alpine AS build
# install gyp tools
RUN apk add --update --no-cache \
        python \
        make \
        g++
ADD . /src
WORKDIR /src
RUN npm install
#RUN npm run lint
#RUN npm run test
RUN npm run build
RUN npm prune --production


FROM node:9-alpine
RUN apk add --update --no-cache curl
RUN apk add --no-cache bash
ENV PORT=8001
EXPOSE $PORT
ENV DIR=/src
WORKDIR $DIR
# COPY --from=build /src/package.json package.json
# COPY --from=build /src/package-lock.json package-lock.json
# COPY --from=build /src/node_modules node_modules
# COPY --from=build /src/components components
# COPY --from=build /src/lib lib
# COPY --from=build /src/pages pages
# COPY --from=build /src/routes routes
# COPY --from=build /src/public public
# COPY --from=build /src/index.js index.js
# COPY --from=build /src/.next .next

COPY --from=build /src .
#HEALTHCHECK --interval=5s \
#            --timeout=5s \
#            --retries=6 \
#            CMD curl -fs http://localhost:$PORT/_health || exit 1
CMD ["npm", "run", "start"]
