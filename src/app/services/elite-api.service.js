(function () {
    'use strict';

    angular.module('eliteAdmin').factory('eliteApi', eliteApi);

    eliteApi.$inject = ['$http', 'appSpinner'];

    function eliteApi($http, appSpinner) {
        var service = {
            addLeague: addLeague,
            deleteGame: deleteGame,
            deleteLeague: deleteLeague,
            deleteLocation: deleteLocation,
            deleteTeam: deleteTeam,
            getGames: getGames,
            getLeague: getLeague,
            getLeagues: getLeagues,
            getLocation: getLocation,
            getLocations: getLocations,
            getTeams: getTeams,
            saveGame: saveGame,
            saveLeague: saveLeague,
            saveLocation: saveLocation,
            saveTeam: saveTeam
        };

        var baseUrl = 'http://localhost:9002';

        return service;


        function addLeague(league) {
            return httpPost('/leagues', league);
        }

        function deleteGame(id) {
            return httpDelete('/games/' + id);
        }

        function deleteLeague(id) {
            return httpDelete('/leagues/' + id);
        }

        function deleteLocation(id) {
            return httpDelete('/locations/' + id);
        }

        function deleteTeam(id) {
            return httpDelete('/teams/' + id);
        }

        function getGames(leagueId) {
            var url = getUrlByLeagueId('/games', leagueId);
            return httpGet(url);
        }

        function getLeague(leagueId) {
            return httpGet('/leagues/' + leagueId);
        }

        function getLeagues() {
            return httpGet('/leagues');
        }

        function getLocation(locationId) {
            return httpGet('/locations/' + locationId);
        }

        function getLocations() {
            return httpGet('/locations');
        }

        function getTeams(leagueId) {
            var url = getUrlByLeagueId('/teams', leagueId);
            return httpGet(url);
        }

        function saveLeague(league) {
            return httpPut('/leagues', league);
        }

        function saveLocation(location) {
            return saveItem('/locations', location);
        }

        function saveGame(game) {
            return saveItem('/games', game);
        }

        function saveTeam(team) {
            return saveItem('/teams', team);
        }

        /** Private Methods **/

        function getUrlByLeagueId(url, leagueId) {
            return url + '?$top=100&$filter=' + encodeURIComponent('leagueId eq \'' + leagueId + '\'');
        }

        function httpDelete(url) {
            return httpExecute(url, 'DELETE');
        }

        function httpExecute(requestUrl, method, data) {
            appSpinner.showSpinner();
            return $http({
                url: baseUrl + requestUrl,
                method: method,
                data: data
            }).then(function (response) {

                appSpinner.hideSpinner();
                console.log('**response from EXECUTE', response);
                return response.data;
            });
        }

        function httpGet(url) {
            return httpExecute(url, 'GET');
        }

        function httpPut(url, data) {
            return httpExecute(url, 'PUT', data);
        }

        function httpPost(url, data) {
            return httpExecute(url, 'POST', data);
        }

        function saveItem(url, item) {
            if (item.id) {
                return httpPut(url, item);
            } else {
                return httpPost(url, item);
            }
        }
    }
})();
